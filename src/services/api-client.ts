import axios from "axios";
export default axios.create({
  baseURL:"https://api.rawg.io/api",
  params:{
    key:'e484f64442384219916df97e58714056'
  }
})