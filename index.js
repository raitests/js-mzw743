// Import stylesheets
import './style.css';

function likes(names) {
  const likers = names.length;
  if (likers === 0) return('no one likes this');
  else if (likers === 1) return(`${names[0]} likes this`);
  else if (likers === 2) return(`${names[0]} and ${names[1]} likes this`);
  else if (likers === 3)
    return(`${names[0]}, ${names[1]} and ${names[2]} likes this`);
  else
    return(`${names[0]}, ${names[1]} and ${names.length - 2} likes this`);
}

likes([]);
