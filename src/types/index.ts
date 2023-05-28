export interface Connection {
  id: string;
  platform: string;
  userName: string;
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
  editing: boolean;
  isOpen: boolean;
  onClose: () => void;
  id?: string;
  platform?: string;
  userName?: string;
  followerCount?: number;
  postCount?: number;
  images?: { url: string }[];
}

export interface Item {
  id: number;
  name: string;
  platform: string;
}
