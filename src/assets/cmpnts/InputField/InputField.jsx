function InputField({ type = 'input', labelname = 'Input' }) {
   return (
      <>
         <label htmlFor={labelname}>{labelname}</label>
         <input style={{ margin: '1rem' }} id={labelname} type={type} />
      </>
   )
}

export default InputField
