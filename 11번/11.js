let today = new Date();
let hour = today.getHours();

if (hour < 10) {
  console.log('Good Morning');
} else if (hour >= 10 && hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Evening');
}
