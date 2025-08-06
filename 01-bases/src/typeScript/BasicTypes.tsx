

export const BasicTypes = () => {
    
  const name: string = 'Ignacio';
  const age: number = 25;
  const isActive: boolean = true;

  const powers: string[] = [];

  return (
    <>
        <div>basicTypes</div>
        { name } - { age } - { isActive ? 'activo' : 'no activo' }
        { powers}
    </>
  )
}
