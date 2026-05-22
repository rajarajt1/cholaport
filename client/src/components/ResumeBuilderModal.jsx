import { useEffect, useMemo, useState } from 'react';

const DEFAULT_RESUME = {
  fullName: '',
  headline: '',
  email: '',
  phone: '',
  location: '',
  summary: '',
  skills: '',
  experience: '',
  education: '',
  projects: '',
};

const STEPS = [
  {
    key: 'fullName',
    title: 'What is your full name?',
    placeholder: 'John Doe',
  },
  {
    key: 'headline',
    title: 'What role are you targeting?',
    placeholder: 'MERN Stack Developer',
  },
  {
    key: 'email',
    title: 'What is your email address?',
    placeholder: 'john@email.com',
    type: 'email',
  },
  {
    key: 'phone',
    title: 'What is your phone number?',
    placeholder: '+91 98765 43210',
  },
  {
    key: 'location',
    title: 'Where are you based?',
    placeholder: 'Chennai, India',
  },
  {
    key: 'summary',
    title: 'Write a short professional summary.',
    placeholder: '2-3 lines about your experience and strengths',
    multiline: true,
  },
  {
    key: 'skills',
    title: 'List your core skills (comma separated).',
    placeholder: 'React, Node.js, MongoDB, Express, Tailwind CSS',
  },
  {
    key: 'experience',
    title: 'Add your work experience.',
    placeholder: 'Company - Role - Duration - Key achievements',
    multiline: true,
  },
  {
    key: 'education',
    title: 'Add your education details.',
    placeholder: 'Degree - Institution - Year',
    multiline: true,
  },
  {
    key: 'projects',
    title: 'Add your notable projects.',
    placeholder: 'Project - Tech Stack - Impact',
    multiline: true,
  },
];

const ResumeBuilderModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState(DEFAULT_RESUME);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setStepIndex(0);
    setFormData({ ...DEFAULT_RESUME, ...initialData });
  }, [isOpen, initialData]);

  const step = useMemo(() => STEPS[stepIndex], [stepIndex]);

  if (!isOpen) {
    return null;
  }

  const currentValue = formData[step.key] || '';

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [step.key]: event.target.value,
    }));
  };

  const goBack = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    if (stepIndex < STEPS.length - 1) {
      setStepIndex((prev) => prev + 1);
      return;
    }

    onSubmit(formData);
    onClose();
  };

  const progress = Math.round(((stepIndex + 1) / STEPS.length) * 100);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close resume builder"
      />

      <div className="relative w-full max-w-2xl rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card shadow-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 dark:border-dark-border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-navy dark:text-white">Build Your Resume</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Step {stepIndex + 1} of {STEPS.length}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 dark:bg-dark-bg rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="px-6 py-6">
          <label className="block text-base font-semibold text-navy dark:text-white mb-3">
            {step.title}
          </label>

          {step.multiline ? (
            <textarea
              rows={5}
              value={currentValue}
              onChange={handleChange}
              placeholder={step.placeholder}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          ) : (
            <input
              type={step.type || 'text'}
              value={currentValue}
              onChange={handleChange}
              placeholder={step.placeholder}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            />
          )}
        </div>

        <div className="px-6 py-4 border-t border-gray-200 dark:border-dark-border flex items-center justify-between">
          <button
            onClick={goBack}
            disabled={stepIndex === 0}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border text-sm font-medium text-gray-600 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Back
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition"
            >
              Cancel
            </button>
            <button
              onClick={goNext}
              className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-red-700 transition"
            >
              {stepIndex === STEPS.length - 1 ? 'Generate Resume' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderModal;
