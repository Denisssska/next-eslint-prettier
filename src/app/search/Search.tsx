'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, ChangeEventHandler } from 'react';

import { debounce } from '@/utils/debounce';

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch: ChangeEventHandler<HTMLInputElement> = debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      if (event.target.value) {
        event.target.value.length > 2 && params.set('q', event.target.value);
      } else {
        params.delete('q');
      }
      replace(`${pathname}?${params}`);
    },
    1000
  );

  return (
    <div style={{ marginBottom: '10px' }}>
      <input type="text" placeholder={placeholder} onChange={handleSearch} />
    </div>
  );
};

export default Search;
