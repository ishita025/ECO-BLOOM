import React from 'react';

const Team = () => {
    return (
        <div>
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-10">
                    <h1 class="text-3xl font-bold">Meet Our Team</h1>
                    <p class="text-gray-600 dark:text-gray-400">Our dedicated team of professionals is here to help you succeed.</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white  shadow-lg rounded-lg overflow-hidden">
                        <img src="public/aarsh.png" alt="Team Member 1" class="w-full h-70 object-cover" />
                        <div class="p-6">
                            <h2 class="text-xl font-semibold">Aarsh s Lal</h2>
                            <p class="text-gray-600 dark:text-gray-400">Backend Developer</p>
                           
                        </div>
                    </div>

                    <div class="bg-white  shadow-lg rounded-lg overflow-hidden">
                        <img src="ishita.png" alt="Team Member 2" class="w-full h-70 object-cover" />
                        <div class="p-6">
                            <h2 class="text-xl font-semibold">Ishita Gupta</h2>
                            <p class="text-gray-600 dark:text-gray-400">Frontend Developer</p>
                            
                        </div>
                    </div>

                    <div class="bg-white  shadow-lg rounded-lg overflow-hidden">
                        <img src="garv.png" alt="Team Member 3" class="w-full h-70 object-cover" />
                        <div class="p-6">
                            <h2 class="text-xl font-semibold">Garv Malhotra</h2>
                            <p class="text-gray-600 dark:text-gray-400">UI/UX Designer</p>
                           
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Team;
