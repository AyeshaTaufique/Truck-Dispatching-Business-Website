import { useState } from 'react';
import { CheckCircle2, UploadCloud } from 'lucide-react';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    mcNumber: '',
    equipmentType: 'Dry Van',
    lanes: '',
    hazmat: false,
    twic: false
  });
  const [documents, setDocuments] = useState<Record<string, File | null>>({
    "W-9 Form": null,
    "Certificate of Insurance": null,
    "MC Authority Letter": null,
    "Notice of Assignment (NOA)": null
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.firstName.trim()) { newErrors.firstName = 'First name is required'; isValid = false; }
      if (!formData.lastName.trim()) { newErrors.lastName = 'Last name is required'; isValid = false; }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'; isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format'; isValid = false;
      }
      if (!formData.phone.trim()) { newErrors.phone = 'Phone number is required'; isValid = false; }
      if (!formData.mcNumber.trim()) { newErrors.mcNumber = 'MC Number / USDOT is required'; isValid = false; }
    } else if (currentStep === 2) {
      if (!formData.lanes.trim()) { newErrors.lanes = 'Preferred lanes/regions are required'; isValid = false; }
    } else if (currentStep === 3) {
      Object.keys(documents).forEach((docName) => {
        if (!documents[docName]) {
          newErrors[docName] = `${docName} is required`;
          isValid = false;
        }
      });
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setStep(step + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Application submitted successfully!');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (docName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [docName]: 'File size must be less than 5MB' }));
        return;
      }
      setDocuments(prev => ({ ...prev, [docName]: file }));
      if (errors[docName]) {
        setErrors(prev => ({ ...prev, [docName]: '' }));
      }
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#fafafa] min-h-screen">
      <section className="pt-16 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
              Register as a Driver
            </h1>
            <p className="text-zinc-600">
              Join our network and let us handle the dispatching. It takes less than 5 minutes to apply.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-zinc-200 rounded-full z-0"></div>
              <div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 rounded-full z-0 transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
              
              {[1, 2, 3].map((s) => (
                <div key={s} className="relative z-10 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors shadow-sm ${
                    step >= s ? 'bg-blue-600 text-white border-2 border-blue-600' : 'bg-white text-zinc-400 border-2 border-zinc-200'
                  }`}>
                    {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  <div className={`absolute top-12 text-xs font-medium ${step >= s ? 'text-blue-600' : 'text-zinc-400'}`}>
                    {s === 1 ? 'Personal' : s === 2 ? 'Equipment' : 'Documents'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-xl mt-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-semibold text-zinc-900 mb-6">Personal Information</h2>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={`w-full px-4 py-2.5 rounded-xl border ${errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`} />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1.5">Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={`w-full px-4 py-2.5 rounded-xl border ${errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`} />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-2.5 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-2.5 rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">MC Number / USDOT</label>
                  <input type="text" name="mcNumber" value={formData.mcNumber} onChange={handleChange} className={`w-full px-4 py-2.5 rounded-xl border ${errors.mcNumber ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`} />
                  {errors.mcNumber && <p className="text-red-500 text-xs mt-1">{errors.mcNumber}</p>}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-semibold text-zinc-900 mb-6">Equipment Details</h2>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">Equipment Type</label>
                  <select name="equipmentType" value={formData.equipmentType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-shadow">
                    <option>Dry Van</option>
                    <option>Reefer</option>
                    <option>Flatbed</option>
                    <option>Step Deck</option>
                    <option>Power Only</option>
                    <option>Hotshot</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1.5">Preferred Lanes / Regions</label>
                  <input type="text" name="lanes" value={formData.lanes} onChange={handleChange} placeholder="e.g., Midwest, Southeast, OTR" className={`w-full px-4 py-2.5 rounded-xl border ${errors.lanes ? 'border-red-500 focus:ring-red-500' : 'border-zinc-200 focus:ring-blue-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-shadow`} />
                  {errors.lanes && <p className="text-red-500 text-xs mt-1">{errors.lanes}</p>}
                </div>
                <div className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl bg-zinc-50 hover:border-blue-200 transition-colors cursor-pointer">
                  <input type="checkbox" id="hazmat" name="hazmat" checked={formData.hazmat} onChange={handleChange} className="w-4 h-4 text-blue-600 rounded border-zinc-300 focus:ring-blue-500" />
                  <label htmlFor="hazmat" className="text-sm font-medium text-zinc-700 w-full cursor-pointer">I have a Hazmat Endorsement</label>
                </div>
                <div className="flex items-center gap-3 p-4 border border-zinc-200 rounded-xl bg-zinc-50 hover:border-blue-200 transition-colors cursor-pointer">
                  <input type="checkbox" id="twic" name="twic" checked={formData.twic} onChange={handleChange} className="w-4 h-4 text-blue-600 rounded border-zinc-300 focus:ring-blue-500" />
                  <label htmlFor="twic" className="text-sm font-medium text-zinc-700 w-full cursor-pointer">I have a TWIC Card</label>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl font-semibold text-zinc-900 mb-6">Document Upload</h2>
                <p className="text-sm text-zinc-500 mb-4">Please upload copies of your essential documents to speed up the onboarding process.</p>
                
                <div className="space-y-4">
                  {[
                    "W-9 Form",
                    "Certificate of Insurance",
                    "MC Authority Letter",
                    "Notice of Assignment (NOA)"
                  ].map((doc, idx) => (
                    <div key={idx} className="relative">
                      <input
                        type="file"
                        id={`file-upload-${idx}`}
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(doc, e)}
                      />
                      <label 
                        htmlFor={`file-upload-${idx}`} 
                        className={`border ${errors[doc] ? 'border-red-500' : 'border-dashed border-zinc-300'} rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer group w-full`}
                      >
                        {documents[doc] ? (
                          <>
                            <CheckCircle2 className="w-8 h-8 text-emerald-500 mb-2" />
                            <span className="text-sm font-medium text-zinc-900">{doc} Uploaded</span>
                            <span className="text-xs text-emerald-600 mt-1">{documents[doc]?.name}</span>
                          </>
                        ) : (
                          <>
                            <UploadCloud className="w-8 h-8 text-zinc-400 mb-2 group-hover:text-blue-500 transition-colors" />
                            <span className="text-sm font-medium text-zinc-900 group-hover:text-blue-700">{doc}</span>
                            <span className="text-xs text-zinc-500 mt-1">PDF, JPG, or PNG (Max 5MB)</span>
                          </>
                        )}
                      </label>
                      {errors[doc] && <p className="text-red-500 text-xs mt-1 text-center">{errors[doc]}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-10 flex justify-between pt-6 border-t border-zinc-100">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                className={`px-6 py-2.5 rounded-xl font-medium transition-colors ${
                  step === 1 ? 'opacity-0 pointer-events-none' : 'text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-2.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-md"
              >
                {step === 3 ? 'Submit Application' : 'Continue'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
