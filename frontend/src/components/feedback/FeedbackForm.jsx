import FormField from "../ui/FormField.jsx";
import Button from "../ui/Button.jsx";
import {usePetForm} from "../../hooks/usePetForm.js";
import {useFeedbackForm} from "../../hooks/useFeedbackForm.js";
import Label from "../ui/Label.jsx";
import Select from "../ui/Select.jsx";

const FeedbackForm = ({onSuccess, appointmentId}) => {
    const { values, errors, loading, handleChange, handleSubmit } =
        useFeedbackForm(appointmentId, onSuccess);

    return (
        <div className="w-full">
            <header className="border-b pb-4 mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink/80 mb-2">
                    Обратная связь
                </p>
                <p className="text-sm leading-relaxed">
                    Поделитесь впечатлениями о приеме, чтобы мы могли стать лучше.
                </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                    <Label htmlFor="rating">Оценка (от 1 до 5)</Label>
                    <Select
                        id="rating"
                        name="rating"
                        value={values.rating}
                        onChange={handleChange}
                    >
                        <option value="5">5 — Отлично</option>
                        <option value="4">4 — Хорошо</option>
                        <option value="3">3 — Нормально</option>
                        <option value="2">2 — Плохо</option>
                        <option value="1">1 — Ужасно</option>
                    </Select>
                    {errors.rating && (
                        <p className="text-danger text-xs mt-1">{errors.rating}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={values.comment}
                        onChange={handleChange}
                        placeholder="Расскажите, как прошел прием..."
                        rows={4}
                        className="w-full py-2.5 px-3 bg-transparent border border-ink/30 focus:outline-none focus:border-accent text-sm transition-colors resize-none"
                    />
                    {errors.comment && (
                        <p className="text-danger text-xs mt-1">{errors.comment}</p>
                    )}
                </div>

                {errors._global && (
                    <p className="text-danger text-sm">{errors._global}</p>
                )}

                <Button type="submit" disabled={loading}>
                    {loading ? "Отправка..." : "Прокомментировать"}
                </Button>
            </form>
        </div>
    );
};

export default FeedbackForm;