import React from 'react';
import s from './Spinner.module.css';

export default function Spinner () {
	return <div className={s['lds-dual-ring']}></div>;
}

