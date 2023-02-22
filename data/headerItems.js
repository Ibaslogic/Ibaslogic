import { BiDotsVerticalRounded } from 'react-icons/bi';

export const headerItems = [
  {
    label: 'React v1',
    url: 'https://github.com/Ibaslogic/Ibaslogic/tree/v1/docs/guides',
  },
  {
    label: <BiDotsVerticalRounded />,
    submenu: [
      {
        label: 'Newsletter',
        url: 'https://ibaslogic.substack.com/',
      },
      {
        label: 'Support me',
        url: 'https://www.buymeacoffee.com/ibaslogic',
      },
    ],
  },
];
