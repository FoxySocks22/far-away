export const Stats = ({ items }) => {
    if(!items.length) 
      return (
        <p className="stats">
          <em>Start adding items to your packing list 🚀</em>
        </p>
      )
    const numItems = items.length;
    const numOfPacked = items.filter(item=>item.packed).length;
    const percentagePacked = Math.round(numOfPacked / numItems * 100);
    return (
    <footer className="stats">💼
    { percentagePacked === 100 ? "Your all packed and ready to go! ✈️" 
    :
    `You have ${ numItems } items on your list, you have already packed 
    ${ numOfPacked } items, or ${ percentagePacked }% of your list.`
    }
    </footer>
    )
}