export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const BG = 'https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg';
export const USER_ICON = 'https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg';

export const APP_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL =  'https://image.tmdb.org/t/p/w500/'

export const SUPPORTED_LANGUAGES = [
  {id:"en",name:"English"},
  {id:"hi",name:"Hindi"},
  {id:"sp",name:"Spanish"},
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;