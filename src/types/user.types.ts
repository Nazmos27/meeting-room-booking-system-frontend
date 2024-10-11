export type TUser = {
    name: string;
    email: string;
    phone: string;
    password?: string;
    address: string;
    isDeleted: boolean;
    role: string;
    _id: string;
  };

  export type TRoom = {
    _id: string;
    img: string;
    name: string;
    roomNo: number;
    floorNo: number;
    pricePerSlot: number;
    capacity: number;
    amenities: string[];
    createdAt: string;
    isDeleted: boolean;
    updatedAt: string;
  };