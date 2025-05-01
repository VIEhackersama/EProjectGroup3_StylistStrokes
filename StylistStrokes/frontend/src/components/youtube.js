export default function YoutubeEmbed({url}){
    return (
        <div className="container my-5">
            <div className="ratio ratio-16x9">
                <iframe
                    src={url} 
                    title="YouTube video"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};
