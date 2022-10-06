import {DiemDi} from './diemDi';
import {DiemDen} from './diemDen';

export interface QuanLy {
  id?:number;
  soXe?:number;
  loaiXe?:string;
  tenNhaXe?:string;
  diemDi?:DiemDi;
  diemDen?:DiemDen;
  soDienThoai?:string;
  email?:string;
  gioDi?:string;
  gioDen?:string;
  status?:boolean;
}
