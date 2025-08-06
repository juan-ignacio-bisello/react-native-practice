

export const BasicFunctions = () => {

    const addTwoNumbers = ( a:number, b:number ): number => {
        return a + b;
    }
  return (
    <>
        <div>BasicFunctions</div>
        <span>Resultado = { addTwoNumbers(2, 8) }</span>
    </>
  )
}
