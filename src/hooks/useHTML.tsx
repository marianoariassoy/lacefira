const useHTML = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />
}

export default useHTML
