
interface Person {
    age: number;
    name: string;
    lastName: string;
    address: Address
}

interface Address {
    country: string;
    num: string;
    street?: string | undefined;
}


export const ObjectLiterals = () => {

    const persona: Person = {
        age: 25,
        name: 'ignacio',
        lastName: 'bisello',
        address: {
            country: 'Argentina',
            num: '1473'
        }
    }
  return (
    <>
        <div>ObjectLiterals</div>
        <pre>{ JSON.stringify( persona, null, 2 )}</pre>
    </>
    
  )
}
