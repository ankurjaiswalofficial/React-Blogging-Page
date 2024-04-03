import Card from "./Components/Card/Card";

function App() {
    const cardData = {
        flatCard: false,
        tagName: "Growth",
        tagColor: "red",
        title: "Card Title",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, illo vitae mollitia dolor at itaque odit omnis facilis voluptate impedit.",
        creatorName: "Ankur Jaiswal",
        creationDate: "Apr 03, 2024",
        creatorImage:
            "https://images.unsplash.com/photo-1712068944613-1ff36db16612?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        thumbnailImage:
            "https://plus.unsplash.com/premium_photo-1680721444887-65c4138abb27?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    };
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-row flex-wrap gap-6">
                <Card
                    flatCard={cardData.flatCard}
                    tagNam4e={cardData.tagName}
                    tagColor={cardData.tagColor}
                    title={cardData.title}
                    description={cardData.description}
                    creatorName={cardData.creatorName}
                    creationDate={cardData.creationDate}
                    creatorImage={cardData.creatorImage}
                    thumbnailImage={cardData.thumbnailImage}
                />
            </div>
        </div>
    );
}

export default App;
