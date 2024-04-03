import Card from "./Components/Card/Card";

function App() {
    const cardData = [
        {
            flatCard: true,
            tagName: "Latest Post",
            tagColor: "#0af",
            title: "A Practical Guide to Apple Search Ads",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, illo vitae mollitia dolor at itaque odit omnis facilis voluptate impedit.",
            creatorName: "Ankur Jaiswal",
            creationDate: "Apr 03, 2024",
            creatorImage:
                "https://images.unsplash.com/photo-1712068944613-1ff36db16612?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailImage:
                "https://images.unsplash.com/photo-1588834747799-82f691b36ff6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            flatCard: false,
            tagName: "Growth",
            tagColor: "green",
            title: "Card Title 2",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, illo vitae mollitia dolor at itaque odit omnis facilis voluptate impedit.",
            creatorName: "Ankur Jaiswal",
            creationDate: "Apr 03, 2024",
            creatorImage:
                "https://images.unsplash.com/photo-1541823709867-1b206113eafd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailImage:
                "https://images.unsplash.com/photo-1647612011547-55ae297d6a97?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            flatCard: false,
            tagName: "Growth",
            tagColor: "green",
            title: "Card Title 3",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, illo vitae mollitia dolor at itaque odit omnis facilis voluptate impedit.",
            creatorName: "Ankur Jaiswal",
            creationDate: "Apr 03, 2024",
            creatorImage:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailImage:
                "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            flatCard: false,
            tagName: "Growth",
            tagColor: "green",
            title: "Card Title 3",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, illo vitae mollitia dolor at itaque odit omnis facilis voluptate impedit.",
            creatorName: "Ankur Jaiswal",
            creationDate: "Apr 03, 2024",
            creatorImage:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailImage:
                "https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            flatCard: false,
            tagName: "Growth",
            tagColor: "green",
            title: "Card Title 3",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, illo vitae mollitia dolor at itaque odit omnis facilis voluptate impedit.",
            creatorName: "Ankur Jaiswal",
            creationDate: "Apr 03, 2024",
            creatorImage:
                "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailImage:
                "https://images.unsplash.com/photo-1638136264464-2711f0078d1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            type2: true,
            flatCard: true,
            tagName: "Growth",
            tagColor: "green",
            title: "Card Title 3",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, illo vitae mollitia dolor at itaque odit omnis facilis voluptate impedit.",
            creatorName: "Ankur Jaiswal",
            creationDate: "Apr 03, 2024",
            creatorImage:
                "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            thumbnailImage:
                "https://images.unsplash.com/photo-1615458317303-4bb49df432cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-row flex-wrap gap-6">
                {cardData.map((e, index) => {
                    return (
                        <Card
                            key={String(index) + `${e.title}`}
                            type2={e.type2 !== undefined ? e.type2 : false}
                            flatCard={e.flatCard !== undefined ? e.flatCard : false}
                            tagName={e.tagName}
                            tagColor={e.tagColor}
                            title={e.title}
                            description={e.description}
                            creatorName={e.creatorName}
                            creationDate={e.creationDate}
                            creatorImage={e.creatorImage}
                            thumbnailImage={e.thumbnailImage}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
