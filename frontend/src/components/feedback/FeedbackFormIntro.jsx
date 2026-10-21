import {Link} from "react-router-dom";

const FeedbackFormIntro = () => {
    return (
        <div>
            <header>
                <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-2">
                    форма отзыва
                </p>
                <h2 className="font-accent font-bold text-5xl leading-tight ">
                    Комментарий<span className="text-accent">.</span>
                </h2>
            </header>
            <p className="w-full md:w-2/3 text-sm  leading-relaxed my-2">
                На этой странице вы можете оставить отзыв о посещении нашей клиники.
                Ваше мнение очень важно для нас: оно помогает нам улучшать качество обслуживания,
                а другим владельцам — выбирать лучших специалистов. Расскажите, как прошел прием,
                насколько внимательным был врач и довольны ли вы результатом.
                Ваша обратная связь делает нашу помощь еще лучше.
            </p>
            <p className="w-full md:w-2/3 text-sm  leading-relaxed">
                Просмотреть{" "}
                <Link className="underline text-accent" to="/appointments">
                    историю болезни
                </Link>
                .
            </p>
        </div>
    )
}
export default FeedbackFormIntro