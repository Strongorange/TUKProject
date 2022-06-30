const CRecommend = (temp, feels_like, tops, bottoms, index) => {
  //

  let topArr;
  let bottomArr;

  console.log(`${index}\n\n`);

  switch (true) {
    case feels_like > 30:
      topArr = tops.filter((c) => c.range == 0);
      bottomArr = bottoms.filter((c) => c.range == 0);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > 26:
      topArr = tops.filter((c) => c.range == 1);
      bottomArr = bottoms.filter((c) => c.range == 1);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > 22:
      topArr = tops.filter((c) => c.range == 2);
      bottomArr = bottoms.filter((c) => c.range == 2);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > 18:
      topArr = tops.filter((c) => c.range == 3);
      bottomArr = bottoms.filter((c) => c.range == 3);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > 14:
      topArr = tops.filter((c) => c.range == 4);
      bottomArr = bottoms.filter((c) => c.range == 4);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > 10:
      topArr = tops.filter((c) => c.range == 5);
      bottomArr = bottoms.filter((c) => c.range == 5);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > 6:
      topArr = tops.filter((c) => c.range == 6);
      bottomArr = bottoms.filter((c) => c.range == 6);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > 2:
      topArr = tops.filter((c) => c.range == 7);
      bottomArr = bottoms.filter((c) => c.range == 7);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > -2:
      topArr = tops.filter((c) => c.range == 8);
      bottomArr = bottoms.filter((c) => c.range == 8);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > -6:
      topArr = tops.filter((c) => c.range == 9);
      bottomArr = bottoms.filter((c) => c.range == 9);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
    case feels_like > -10:
      topArr = tops.filter((c) => c.range == 10);
      bottomArr = bottoms.filter((c) => c.range == 10);
      console.log(`From CR feels_like = ${feels_like}`);
      console.log(`From CR topArr = ${topArr}`);
      console.log(`From CR bottomArr = ${bottomArr}\n\n`);
  }
};

export default CRecommend;
