import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

export const useListOfPosts = () => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, isLoading] = useState(false);
  const [query, setQuery] = useState('');

  
  type DataType = {
    name: string;
    post: string;
    image: string;
    avatar: string;
  };

  useMemo(() => {
    isLoading(true);
    const fetchContent = async () =>
      await axios
        .get(
          `https://63ce099f6d27349c2b66a67e.mockapi.io/api/v1/post?page=${page}`,
          {
            method: 'GET',
          }
        )
        .then((response: any) => {
          const newItems: any = [...items, ...response.data];
          setItems(newItems);
          setData(newItems);
          setPage(page + 1);
        })
        .catch((err) => console.log(err.message))
        .finally(() => isLoading(false));
    fetchContent();
  }, []);


  useEffect(() => {
    if (query !== '') {
      const results = data.filter((item: DataType) => {
        return (
          item.name.toLowerCase().startsWith(query.toLowerCase()) ||
          item.post.toLowerCase().startsWith(query.toLowerCase()) 
        );
      });
      setItems(results);
    } else {
      setItems(data);
    }
  }, [query]);


  const generateNewList = async () => {
    isLoading(true);
    const fetchContent = async () =>
      await axios
        .get(
          `https://63ce099f6d27349c2b66a67e.mockapi.io/api/v1/post?page=${page}`,
          {
            method: 'GET',
          }
        )
        .then((response: any) => {
          const newItems: any = [...items, ...response.data];
          setItems(newItems);
          setPage(page + 1);
          setData(newItems);
          // setHasMore(currentData.hasNextPage);
        })
        .catch((err) => console.log(err.message))
        .finally(() => isLoading(false));
    fetchContent();
  };

  const fetchMoreData = () => {
    generateNewList();
  };

  return {
    fetchMoreData,
    items,
    hasMore,
    loading,
    query,
    setQuery,
  };
};
