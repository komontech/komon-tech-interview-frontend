export interface Connection {
  id: string;
  platform: string;
  connectionName: string;
  followerCount: number;
  postCount: number;
  images: { url: string }[];
}

export interface ConnectionDetailsProps {
  params: {
    connectionId: string;
  };
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  //onSubmit: (item: Item) => void;
}

export interface Item {
  id: number;
  name: string;
  platform: string;
}
