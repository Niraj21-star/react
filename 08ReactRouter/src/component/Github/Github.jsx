import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    
    console.log('GitHub data:', data); // Debug log
    
    if (!data) {
        return (
            <div className='text-center m-4 bg-yellow-200 p-10 text-3xl font-bold'>
                Loading GitHub data...
            </div>
        );
    }

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-10 text-3xl'>
            <h2 className='font-bold mb-4'>GitHub Profile</h2>
            <div className='flex flex-col items-center gap-4'>
                <img 
                    src={data.avatar_url} 
                    alt="GitHub Profile" 
                    className='rounded-full w-64 h-64 border-4 border-orange-500' 
                />
                <div className='text-2xl'>
                    <p className='font-bold text-orange-400'>{data.name || data.login}</p>
                    <p className='text-xl mt-2'>@{data.login}</p>
                </div>
                <div className='flex gap-8 mt-4 text-xl'>
                    <div className='bg-orange-500 px-6 py-3 rounded-lg'>
                        <p className='font-bold'>{data.followers}</p>
                        <p className='text-sm'>Followers</p>
                    </div>
                    <div className='bg-orange-500 px-6 py-3 rounded-lg'>
                        <p className='font-bold'>{data.following}</p>
                        <p className='text-sm'>Following</p>
                    </div>
                    <div className='bg-orange-500 px-6 py-3 rounded-lg'>
                        <p className='font-bold'>{data.public_repos}</p>
                        <p className='text-sm'>Repos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/Niraj21-Star');
        if (!response.ok) {
            throw new Error('Failed to fetch GitHub data');
        }
        return response.json();
    } catch (error) {
        console.error('Error loading GitHub data:', error);
        return null;
    }
}