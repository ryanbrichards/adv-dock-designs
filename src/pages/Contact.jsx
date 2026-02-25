import React, { useState } from 'react';
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const emailBody = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          <p><strong>Project Type:</strong> ${formData.projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `;

        await Promise.all([
          base44.integrations.Core.SendEmail({
            to: 'ryanbrichards@gmail.com',
            subject: `New Contact Form Submission - ${formData.projectType || 'General Inquiry'}`,
            body: emailBody
          }),
          base44.integrations.Core.SendEmail({
            to: 'advanceddockdesigns@gmail.com',
            subject: `New Contact Form Submission - ${formData.projectType || 'General Inquiry'}`,
            body: emailBody
          })
        ]);

        setIsSubmitting(false);
        setIsSubmitted(true);
      } catch (error) {
        setIsSubmitting(false);
        alert('Failed to send message. Please try again or contact us directly.');
      }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to transform your waterfront? Contact us for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">
                      21101 Rte 19<br />
                      Cranberry Twp, PA 16066
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">(412) 480-9670</p>
                    <p className="text-slate-500 text-sm">Call or Text</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a href="mailto:advanceddockdesigns@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">advanceddockdesigns@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">
                      By appointment only.<br />
                      Please contact us to schedule a time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="mt-10 p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-semibold text-slate-900 mb-3">Service Area</h3>
                <p className="text-slate-600 text-sm">
                  We proudly serve waterfront properties across Pennsylvania, Ohio, 
                  and West Virginia. Contact us to confirm we service your area.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-slate-600 max-w-md mx-auto">
                        We've received your message and will get back to you within 
                        24 hours. We look forward to helping with your dock project!
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
                        }}
                        variant="outline"
                        className="mt-6 rounded-full"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        Contact Us
                      </h2>
                      <p className="text-slate-600 mb-8">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="John Smith"
                              value={formData.name}
                              onChange={(e) => handleChange('name', e.target.value)}
                              required
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              required
                              className="h-12"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="(555) 123-4567"
                              value={formData.phone}
                              onChange={(e) => handleChange('phone', e.target.value)}
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="projectType">Project Type *</Label>
                            <Select 
                              value={formData.projectType} 
                              onValueChange={(value) => handleChange('projectType', value)}
                              required
                            >
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new_dock">New Dock Installation</SelectItem>
                                <SelectItem value="boat_lift">Boat Lift</SelectItem>
                                <SelectItem value="pwc_port">PWC Port</SelectItem>
                                <SelectItem value="accessories">Accessories</SelectItem>
                                <SelectItem value="repair">Repair / Maintenance</SelectItem>
                                <SelectItem value="relocation">Dock Relocation</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Tell Us About Your Project *</Label>
                          <Textarea
                            id="message"
                            placeholder="Describe your waterfront, what you're looking for, and any questions you have..."
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            required
                            className="min-h-[150px]"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full bg-blue-500 hover:bg-blue-600 rounded-full h-14 text-lg"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </Button>

                        <p className="text-center text-slate-500 text-sm">
                          We respect your privacy and will never share your information.
                        </p>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
