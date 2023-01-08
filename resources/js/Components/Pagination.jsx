import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import parse from 'html-react-parser';


  
export default function Pagination({ resultList }) {
  
    function getClassName(active) {
        if(active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-yellow-400 text-black no-underline";
        } else{
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary text-black no-underline";
        }
    }
  
    return (
        resultList.links.length > 3 && (
            <div className="mb-4 ">
                <div className="flex flex-wrap mt-8 ">
                    {resultList.links.map((link, key) => (
                        link.url === null ?
                            (<div className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-yellow-500 border rounded no-underline">{parse(link.label)}</div>) :
                            (<Link className={getClassName(link.active)} href={ link.url }>{parse(link.label)}</Link>)
                    ))}
                </div>
                <div>
                </div>
            </div>
        )
    );
}