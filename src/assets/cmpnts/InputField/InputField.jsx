function InputField(props) {
	const [type, labelname, ...rest] = props
	labelname ?? 'Input'
   return (
      <>
			 <label htmlFor={labelname}>{Input}</label>
			 <input id={labelname} type={type} {...rest} />
      </>
   )
}

export default inputField
