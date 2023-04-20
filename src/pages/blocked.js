import ErrorPage from 'next/error'

function Blocked() {
	return <ErrorPage statusCode={403} title="Sorry we've blocked your country for legal reasons" />
}

export default Blocked