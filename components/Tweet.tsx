import { Tweet } from 'react-tweet';

export function XTweet() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 [color-scheme:dark] *:my-0">
      <div className="flex justify-center [&_.react-tweet-theme]:my-0 [&_.react-tweet-theme]:w-full">
        <Tweet id="1718296988729356404" />
      </div>
      <div className="flex justify-center [&_.react-tweet-theme]:my-0 [&_.react-tweet-theme]:w-full">
        <Tweet id="1647193298908397571" />
      </div>
      <div className="flex justify-center [&_.react-tweet-theme]:my-0 [&_.react-tweet-theme]:w-full">
        <Tweet id="1633770889119506432" />
      </div>
      <div className="flex justify-center [&_.react-tweet-theme]:my-0 [&_.react-tweet-theme]:w-full">
        <Tweet id="1581469371322445825" />
      </div>
    </div>
  );
}
