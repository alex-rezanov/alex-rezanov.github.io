export interface SuperUser {
  name: string;
  surname: string;
  position: string;
  location: string;
  footerQuote: string;
  links: Links;
}

export interface Links {
  cv: string;
  email: string;
  linkedIn: string;
}
