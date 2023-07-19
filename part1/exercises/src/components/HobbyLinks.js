import classes from './HobbyLinks.module.css'

export default function HobbyLinks() {
  let hobbyLinks = [
    "https://halotracker.com/",
    "https://strengthlevel.com/one-rep-max-calculator",
  ];
  return (
    <div>
      <a href={hobbyLinks[0]}>A place to checkout my Halo Infinite stats</a>
      <a href={hobbyLinks[1]}>A place to manage my workout reps</a>
    </div>
  );
}
