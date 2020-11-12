import React, { Suspense } from 'react';
import Spinner from "../UI/Spinner/Spinner";

function WrapSupsense({children}) {
	return (
		<Suspense fallback={<Spinner />}>
      		{children}
    	</Suspense>
	)
}

export default WrapSupsense;