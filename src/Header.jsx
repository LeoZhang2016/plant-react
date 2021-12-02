import React from 'react';

export default function Header() {
    return (
        <section className={"sticky top-1 bg-purple-600  p-8 text-gray-100"}>
            <a  className={'px-8 inline-block object-right object-right font-bold  hover:text-gray-400 text-2xl'}
                href="/list"
            > List Plant</a>

            <a className={'px-8  inline-block object-right object-right font-bold  hover:text-gray-400 text-2xl'}
                href="/add"
            >Add Plant</a>
        </section>
    );
}