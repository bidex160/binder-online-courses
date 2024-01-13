//input Type

export type InputType =
  | 'select'
  | 'number'
  | 'text'
  | 'password'
  | 'email'
  | 'textarea'
  | 'radio'
  | 'checkbox';

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

export type MessageType = 'success' | 'danger' | 'warning';
