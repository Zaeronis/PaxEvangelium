import Verse from "./Verse.jsx";

export default function Excerpt({title, excerpt, inline}) {
    return (
        <>
            <p>{title}</p>
            {excerpt.map((verse) => (
                <Verse
                    verseNum={verse.num}
                    verseText={verse.text}
                    inline={inline}
                />
            ))}
        </>
    )
}