import Card from "./Components/Card/Card";
import cardData from 
function App() {
    const cardData = cardData;
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
