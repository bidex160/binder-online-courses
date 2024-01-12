//input Type

export type InputType =
  | 'select'
  | 'number'
  | 'text'
  | 'password'
  | 'email'
  | 'textarea';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'success';

  export type CourseAction =
    | 'cart'
    | 'wishlist'
    | 'removeCart'
    | 'removeWishList';