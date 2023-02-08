import React from 'react';
import { useEffect, useState } from 'react';

const Recension = ({ data }) => {
    return (
        <div className="flex items-center">
            <div class="flex">
                {data.length > 0 && (
                    <ul>
                        {data.map((post) => (
                            <li key={post.id}>
                                {/* 
                                FINS EJ I DATABASEN(profilePicture) LÄGG TILL ELLER TA BORT 
                                <img
                                    src={profilePicture}
                                    class="w-12 h-12 rounded-full"
                                    alt="Profile"
                                /> */}
                                <div class="ml-4">
                                    <h2 class="text-xl font-bold">
                                        {post.title} - {post.rating.toString()}
                                    </h2>
                                    {/* post.rating ska bytas ut/länkas till en tumme upp eller 
                                        tumme ner beronde på true eller false (True=Upp, False=Ner)*/}
                                    <h3 class="text-lg font-medium mt-2">
                                        {post.username}
                                    </h3>
                                    <p class="text-gray-600">
                                        {post.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Recension;
