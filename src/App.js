import Card from "./Components/Card/Card";

function App() {
    const cardData = [
        {
            flatCard: false,
            tagName: "Growth",
            tagColor: "#ffaf00",
            title: "Card Title 1",
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
                "https://images.unsplash.com/photo-1664262283559-88f48528d190?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                "https://images.unsplash.com/photo-1645323927915-c5a29e88637b?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-row flex-wrap gap-6">
                {cardData.map((e, index) => {
                    return (
                        <Card
                            key={String(index) + `${e.title}`}
                            flatCard={e.flatCard}
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
