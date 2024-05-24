import { NewProjectForm } from './NewProjectForm';

export default function NewProjectPage() {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-xl text-gray-800">Create project</h1>
      <NewProjectForm className="mt-6" />
    </div>
  );
}