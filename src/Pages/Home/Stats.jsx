import AnimatedNumber from "../../Components/AnimatedNumber";


const Stats = () => {
    const statsData = [
        { label: 'Clients', number: 1.5, numberExtra: 'k' },
        { label: 'Team Member', number: 150, numberExtra: '+' },
        { label: 'Success', number: 96, numberExtra: '%' }
    ]
    return (
        <div className="max-w-7xl mx-auto mt-14 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-7 gap-14">
                { 
                    statsData.map((stat,i)=><div key={i}>
                        <p className="text-xl">{stat.label}</p>
                        <div className="flex text-[110px] text-primary elegant mb-3"><AnimatedNumber n={stat.number}/>{stat.numberExtra}</div>
                        <p className="font-medium text-gray-500 w-4/5">satisfied Client’s have trusted us with their cyber security need</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Stats;