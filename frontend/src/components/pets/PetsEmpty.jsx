import { Link } from "react-router-dom";

const PetsEmpty = () => (
    <p className="block text-sm font-medium text-slate-500 mb-1">
        У вас пока нет зарегистрированных питомцев{" "}
        <Link className="underline text-orange-600" to="/pet/add">
            Зарегистрировать питомца
        </Link>
    </p>
);

export default PetsEmpty;