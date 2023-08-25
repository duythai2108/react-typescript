// generic <>

function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}
const [strGetter, strSetter] = simpleUseState("evondev");
console.log(strGetter()); //evondev
strSetter("Developer");
console.log(strGetter()); //developer

const [strGetter2, strSetter2] = simpleUseState(100);
console.log(strGetter2()); //100
strSetter2(200);
console.log(strGetter2()); //200
// const [strGetter3, strSetter3] = simpleUseState(true);

// **************/
interface Rank<RankItem> {
  item: RankItem;
  raml: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    raml: rank(item),
  }));
  return ranks.map((rank) => rank.item);
}
console.log(ranker([1, 2, 3, 4, 5], (number) => number * 5));
//[1,2,3,4,5] (v) => v * 5
