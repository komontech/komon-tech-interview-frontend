import axios from 'axios';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';


export const useListOfPosts = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, isLoading] = useState(false)
// console.log(pathname, 'ooo')

  useMemo(() => {
   
      const fetchContent=async()=>await axios.get(`https://63ce099f6d27349c2b66a67e.mockapi.io/api/v1/post?page=${page}`,{
        method: "GET"
    })
    .then((response: any) => {
        const newItems: any = [...items, ...response.data];
        setItems(newItems);
        setPage(page + 1);
        // setHasMore(currentData.hasNextPage);
    }).catch((err)=>console.log(err.message))
    .finally(()=> isLoading(false))
    fetchContent();
  }, []);

  // useEffect(() => {
  //   fetch();
  // }, [fetch]);

  const generateNewList = async () => {
    const fetchContent=async()=>await axios.get(`https://63ce099f6d27349c2b66a67e.mockapi.io/api/v1/post?page=${page}`,{
        method: "GET"
    })
    .then((response: any) => {
        const newItems: any = [...items, ...response.data];
        setItems(newItems);
        setPage(page + 1);
        // setHasMore(currentData.hasNextPage);
    }).catch((err)=>console.log(err.message))
    .finally(()=> isLoading(false))
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
  };
};
