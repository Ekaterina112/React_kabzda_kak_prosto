import React, {useCallback,  useState} from 'react';

export default {
    title: 'useCallback'
}
const BooksSecret = (props: { books: ()=>void }) => {
    console.log("books")
    return <div>
        <button onClick={props.books}>add</button>
       </div>

}
const Books = React.memo(BooksSecret) //обертка //ПРИ ИЗМЕНЕНИИ ПРОПСОВ

export const WithHelpUseCallback = () => {
    console.log(' WithHelpUseCallback')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['Potter', 'Karnegi'])
    const newBooksArray = useCallback(()=>{
        const newBooks= [...books,"Angular" + new Date().getTime()]
        setBooks(newBooks)
    }, [books])
    console.log(books)
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Books books={newBooksArray}/>
    </>

}
