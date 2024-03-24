import { FormEvent, FormEventHandler } from 'react';

export type SearchBarProps = {
  inputHandler: (event: FormEvent<HTMLInputElement>) => void;
  searchValue: string;
};
