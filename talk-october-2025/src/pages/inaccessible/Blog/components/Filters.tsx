import { useFormik } from "formik";
import * as Yup from 'yup';

const communInputStyle = "p-2 border-2 rounded text-slate-400";

export default function Filters() {
  const formik = useFormik({
    initialValues: {
      search: '',
      category: '',
      date: '',
      length: '',
    },
    validationSchema: Yup.object({
      search: Yup.string().required('Required'),
      category: Yup.string().required('Required'),
      date: Yup.date().required('Required'),
      length: Yup.number().required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <aside className="p-4 md:p-0">
      <div>Find your favorite blog</div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-1">
          <p>Search *:</p>
          <input
            type="text"
            id="search"
            name="search"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.search}
            className={`${communInputStyle} ${formik.touched.search && formik.errors.search ? 'border-red-400' : 'border-slate-600'}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Category *:</p>
          <select
            id="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            className={`${communInputStyle} ${formik.touched.category && formik.errors.category ? 'border-red-400' : 'border-slate-600'}`}
          >
            <option value="all">All</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <p>Date Published *:</p>
          <input
            type="date"
            id="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className={`${communInputStyle} ${formik.touched.date && formik.errors.date ? 'border-red-400' : 'border-slate-600'}`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Length of Post *:</p>
          <input
            type="number"
            id="length"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.length}
            className={`${communInputStyle} ${formik.touched.length && formik.errors.length ? 'border-red-400' : 'border-slate-600'}`}
          />
        </div>
        <button type="submit" className="bg-blue-500 px-4 py-2">Filter</button>
      </form>
    </aside>
  );
}
