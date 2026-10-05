/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Instagram,
  MessageCircle,
  ExternalLink,
  Sparkles,
  Leaf,
  Share2,
  Check,
  ArrowUpLeft,
  Phone,
  Globe,
} from 'lucide-react';

// Custom TikTok SVG Icon with crisp vector paths
const TikTokIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

interface SocialLink {
  id: string;
  title: string;
  subtitle: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
  iconBg: string;
  hoverBorder: string;
  hoverGlow: string;
  hoverGradient: string;
  accentColor: string;
}

const SPARKLE_PARTICLES = [
  { id: 1, top: '8%', left: '14%', size: 4, duration: 3.2, delay: 0.2 },
  { id: 2, top: '16%', left: '82%', size: 6, duration: 4.1, delay: 1.1 },
  { id: 3, top: '28%', left: '10%', size: 3, duration: 2.8, delay: 0.7 },
  { id: 4, top: '35%', left: '88%', size: 5, duration: 3.6, delay: 1.5 },
  { id: 5, top: '48%', left: '18%', size: 4, duration: 4.5, delay: 0.4 },
  { id: 6, top: '54%', left: '76%', size: 3, duration: 3.0, delay: 2.0 },
  { id: 7, top: '66%', left: '12%', size: 6, duration: 3.9, delay: 0.9 },
  { id: 8, top: '72%', left: '85%', size: 4, duration: 3.3, delay: 1.7 },
  { id: 9, top: '84%', left: '22%', size: 5, duration: 4.2, delay: 0.6 },
  { id: 10, top: '90%', left: '79%', size: 3, duration: 2.9, delay: 1.3 },
  { id: 11, top: '12%', left: '48%', size: 4, duration: 3.7, delay: 2.2 },
  { id: 12, top: '62%', left: '52%', size: 3, duration: 3.4, delay: 0.8 },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    title: 'ئینستاگرام',
    subtitle: 'نوێترین بەرهەمەکانی کۆزمێتیک و گیایی ببینە',
    handle: '@sivar__store',
    url: 'https://www.instagram.com/sivar__store',
    icon: <Instagram className="w-6 h-6 text-white" />,
    iconBg: 'bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 shadow-lg shadow-pink-500/30',
    hoverBorder: 'group-hover:border-pink-500/50',
    hoverGlow: 'group-hover:shadow-[0_0_35px_-5px_rgba(236,72,153,0.35)]',
    hoverGradient: 'from-pink-500/15 via-purple-500/10 to-amber-500/5',
    accentColor: 'group-hover:text-pink-300',
  },
  {
    id: 'tiktok',
    title: 'تیکتۆک',
    subtitle: 'ڤیدیۆ و ڕێنمایی بەکارهێنانی بەرهەمە سروشتییەکان',
    handle: '@sivar_storee',
    url: 'https://www.tiktok.com/@sivar_storee',
    icon: <TikTokIcon className="w-6 h-6 text-white" />,
    iconBg: 'bg-gradient-to-tr from-cyan-500 via-slate-900 to-rose-500 shadow-lg shadow-cyan-500/30 border border-white/15',
    hoverBorder: 'group-hover:border-cyan-400/50',
    hoverGlow: 'group-hover:shadow-[0_0_35px_-5px_rgba(34,211,238,0.35)]',
    hoverGradient: 'from-cyan-500/15 via-rose-500/10 to-transparent',
    accentColor: 'group-hover:text-cyan-300',
  },
  {
    id: 'whatsapp',
    title: 'واتسئاپ',
    subtitle: 'پەیوەندی ڕاستەوخۆ و داواکردنی بەرهەمەکان',
    handle: '0770 468 7994',
    url: 'https://wa.me/9647704687994',
    icon: <MessageCircle className="w-6 h-6 text-white" />,
    iconBg: 'bg-gradient-to-tr from-emerald-600 via-green-500 to-teal-400 shadow-lg shadow-emerald-500/30',
    hoverBorder: 'group-hover:border-emerald-400/60',
    hoverGlow: 'group-hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.4)]',
    hoverGradient: 'from-emerald-500/20 via-green-500/10 to-teal-500/5',
    accentColor: 'group-hover:text-emerald-300',
  },
  {
    id: 'main-website',
    title: 'لقی سەرەکی کارگەی HAWRY - زاخۆ',
    subtitle: 'وێبسایتی سەرەکی بڕاندی هەوری',
    handle: 'HAWRY BRAND',
    url: 'https://chapchaplin.github.io/HAWRY-BRAND/',
    icon: <Globe className="w-6 h-6 text-white" />,
    iconBg: 'bg-gradient-to-tr from-amber-600 via-yellow-500 to-emerald-500 shadow-lg shadow-amber-500/30',
    hoverBorder: 'group-hover:border-amber-400/60',
    hoverGlow: 'group-hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.4)]',
    hoverGradient: 'from-amber-500/20 via-yellow-500/10 to-emerald-500/5',
    accentColor: 'group-hover:text-amber-300',
  },
];

export default function App() {
  const [logoError, setLogoError] = useState(false);
  const [chaplinLogoError, setChaplinLogoError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'HAWRY - کۆزمێتیک و دەرمانی سروشتی و گیایی',
          text: 'بۆ فرۆشتنی cosmetic و دەرمانی سروشتی و گیایی - سلێمانی',
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard copy
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Ignore clipboard errors
    }
  };

  return (
    <div
      dir="rtl"
      className="relative min-h-screen w-full bg-[#060d09] text-slate-100 flex flex-col items-center justify-between py-10 px-4 sm:px-6 overflow-hidden select-none"
    >
      {/* 1. Dark Atmospheric Background with Glowing Orbs & Sparkles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Radial vignette base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/50 via-[#060d09] to-[#030705]" />

        {/* Top Emerald Botanical Glowing Orb */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.32, 0.5, 0.32],
            x: [0, 30, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-28 -right-24 w-96 h-96 rounded-full bg-emerald-500/25 blur-[110px]"
        />

        {/* Center-Left Warm Gold / Rose Cosmetic Glowing Orb */}
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.2, 0.38, 0.2],
            x: [0, -35, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="absolute top-1/3 -left-28 w-80 h-80 rounded-full bg-amber-400/20 blur-[120px]"
        />

        {/* Bottom Teal / Herbal Glowing Orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.22, 0.4, 0.22],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
          className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-teal-500/20 blur-[115px]"
        />

        {/* Twinkling Sparkles */}
        {SPARKLE_PARTICLES.map((sp) => (
          <motion.span
            key={sp.id}
            style={{
              top: sp.top,
              left: sp.left,
              width: sp.size,
              height: sp.size,
            }}
            animate={{
              opacity: [0.15, 0.95, 0.15],
              scale: [0.6, 1.35, 0.6],
            }}
            transition={{
              duration: sp.duration,
              repeat: Infinity,
              delay: sp.delay,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full bg-emerald-200 shadow-[0_0_10px_2px_rgba(110,231,183,0.75)]"
          />
        ))}
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        {/* Top Utility Bar (Share button & subtle nature indicator) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex items-center justify-between mb-4 px-1"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/25 text-emerald-300 text-xs font-medium backdrop-blur-md">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>١٠٠٪ سروشتی و گیایی</span>
          </div>

          <button
            onClick={handleShare}
            type="button"
            aria-label="هاوبەشکردنی پەڕە"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-emerald-500/15 border border-white/10 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-200 text-xs transition-all duration-200 cursor-pointer backdrop-blur-md"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">کۆپی کرا</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>هاوبەشکردن</span>
              </>
            )}
          </button>
        </motion.div>

        {/* 3. Main Circular Logo with Continuous Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mt-2 mb-6 flex items-center justify-center"
        >
          {/* Outer pulsing aura behind logo */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -inset-3 rounded-full bg-gradient-to-tr from-emerald-500/40 via-amber-400/25 to-teal-400/40 blur-xl"
          />

          {/* Continuous Floating Logo Container */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-[0_0_45px_rgba(245,158,11,0.45)]"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#08130d] flex items-center justify-center relative">
              {!logoError ? (
                <img
                  src="https://i.ibb.co/0yQZFQcg/2708fc7f-3187-4ab7-81ec-37ec3a51149d.png"
                  alt="HAWRY Logo"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-cover rounded-full [filter:brightness(0)_saturate(100%)_invert(82%)_sepia(68%)_saturate(750%)_hue-rotate(354deg)_brightness(106%)_contrast(106%)_drop-shadow(0_0_8px_rgba(251,191,36,0.55))]"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-2 bg-gradient-to-b from-emerald-900/60 to-emerald-950 w-full h-full">
                  <Leaf className="w-9 h-9 text-emerald-300 mb-1" />
                  <span className="font-brand font-bold text-lg tracking-wider text-emerald-100">
                    HAWRY
                  </span>
                </div>
              )}
            </div>

            {/* Decorative Sparkle Badge on Corner of Logo */}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 p-1.5 shadow-lg border border-emerald-200/40 flex items-center justify-center"
            >
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 4. Business Name in Large Font & Gradient Text */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-brand text-4xl sm:text-5xl font-extrabold tracking-wider text-center bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(16,185,129,0.3)]"
        >
          HAWRY
        </motion.h1>

        {/* Business Description / Category */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mt-2.5 text-base sm:text-lg font-medium text-emerald-100/90 text-center max-w-xs sm:max-w-sm leading-relaxed"
        >
          <span>بۆ فرۆشتنی cosmetic و دەرمانی سروشتی و گیایی</span>
          <span className="block mt-1.5 text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_1px_8px_rgba(251,191,36,0.35)]">
            ( نوێنەری کارگەی هەوری لە سلێمانی )
          </span>
        </motion.p>

        {/* 5. Address as a Small Badge under the name with MapPin Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="mt-3.5 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-emerald-400/25 shadow-[0_0_20px_rgba(16,185,129,0.12)] backdrop-blur-md transition-all duration-300">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 animate-bounce" />
            <span className="text-xs sm:text-sm text-slate-200 font-medium">
              سلێمانی - گەڕەکی شێخ محێدین
            </span>
          </div>
        </motion.div>

        {/* 6. Links Section - Card Style, Colorful Icons, Hover Animations & Color Shifts */}
        <div className="w-full space-y-4">
          {SOCIAL_LINKS.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 + index * 0.1 }}
              whileHover={{ scale: 1.025, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative block w-full rounded-2xl p-4 bg-white/[0.04] backdrop-blur-xl border border-white/10 ${item.hoverBorder} ${item.hoverGlow} transition-all duration-300 overflow-hidden`}
            >
              {/* Animated Hover Background Gradient Fill */}
              <div
                className={`absolute inset-0 bg-gradient-to-l ${item.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Subtle Moving Shine Effect on Hover */}
              <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:animate-pulse group-hover:opacity-100 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between gap-3.5">
                {/* Right Side (in RTL): Colorful Icon + Text Info */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 ${item.iconBg} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </motion.div>

                  <div className="flex flex-col text-right min-w-0">
                    <div className="flex items-center flex-wrap gap-2">
                      <span
                        className={`text-base sm:text-lg font-bold text-white ${item.accentColor} transition-colors duration-300`}
                      >
                        {item.title}
                      </span>
                      <span
                        dir="ltr"
                        className="text-xs font-mono text-slate-400 group-hover:text-slate-200 bg-black/30 px-2 py-0.5 rounded-md border border-white/5 transition-colors shrink-0"
                      >
                        {item.handle}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-200 truncate mt-0.5 transition-colors duration-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Left Side (in RTL): Action Arrow Icon */}
                <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-white/15 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 group-hover:text-white transition-all duration-300 group-hover:-translate-x-1">
                  <ArrowUpLeft className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Direct Phone Call Quick Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4 w-full flex justify-center"
        >
          <a
            href="tel:07704687994"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-300/80 hover:text-emerald-200 py-1.5 px-4 rounded-full hover:bg-emerald-500/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>ژمارەی تەلەفۆن:</span>
            <span dir="ltr" className="font-mono font-semibold tracking-wide">
              0770 468 7994
            </span>
          </a>
        </motion.div>

        {/* 7. Quote Section Below Links with Glowing Top Line */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.75 }}
          className="w-full mt-9 mb-6 flex flex-col items-center text-center"
        >
          {/* Glowing Divider Line Above Quote */}
          <div className="relative w-full flex items-center justify-center mb-5">
            <div className="w-4/5 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
            <div className="absolute w-2/5 h-2 bg-emerald-400/40 blur-md rounded-full" />
            <div className="absolute px-3 bg-[#060d09] rounded-full border border-emerald-500/30 py-1 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </div>
          </div>

          {/* Styled Quote Box */}
          <div className="relative w-full rounded-2xl p-5 bg-gradient-to-b from-emerald-950/40 via-white/[0.03] to-transparent border border-emerald-500/20 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(16,185,129,0.25)]">
            <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-emerald-200 via-amber-100 to-emerald-200 bg-clip-text text-transparent leading-relaxed">
              « بەرهەمێکی ناوخۆیی بۆ تەندروستییەکی بەردەوام »
            </p>
          </div>
        </motion.section>
      </main>

      {/* 8. Footer Section - Chaplin Chap Signature with Shimmer, Floating Logo & Pulse/Glow Button */}
      <motion.footer
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 w-full max-w-md mx-auto pt-4 pb-2 flex flex-col items-center"
      >
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-5" />

        <div className="flex flex-col items-center gap-3.5">
          {/* Shimmer Text + ExternalLink Icon */}
          <a
            href="https://chaplin-chap.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-transform duration-300 hover:scale-105"
          >
            <span className="bg-gradient-to-r from-slate-300 via-amber-200 to-emerald-300 bg-clip-text text-transparent animate-shimmer">
              دروستکراوە لە لایەن (چاپلین چاپ)
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-300/80 group-hover:text-amber-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Chaplin Chap Floating Logo + Pulse & Glow Button */}
          <div className="flex items-center gap-3">
            {/* Floating Chaplin Chap Logo */}
            <motion.a
              href="https://chaplin-chap.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-emerald-400 to-cyan-400 shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_28px_rgba(251,191,36,0.6)] transition-shadow"
              title="Chaplin Chap"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-center justify-center">
                {!chaplinLogoError ? (
                  <img
                    src="https://i.ibb.co/CpGRgn76/chaplin.jpg"
                    alt="Chaplin Chap Logo"
                    referrerPolicy="no-referrer"
                    onError={() => setChaplinLogoError(true)}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-xs font-bold text-amber-300">CC</span>
                )}
              </div>
            </motion.a>

            {/* "Chaplin Chap" Button with Pulse & Glow Animation */}
            <motion.a
              href="https://chaplin-chap.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                boxShadow: [
                  '0 0 12px rgba(16, 185, 129, 0.35), 0 0 24px rgba(245, 158, 11, 0.15)',
                  '0 0 22px rgba(16, 185, 129, 0.65), 0 0 40px rgba(245, 158, 11, 0.35)',
                  '0 0 12px rgba(16, 185, 129, 0.35), 0 0 24px rgba(245, 158, 11, 0.15)',
                ],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-600/90 via-teal-600/90 to-amber-500/90 text-white text-xs sm:text-sm font-bold tracking-wider border border-white/25 backdrop-blur-md cursor-pointer"
            >
              <span>Chaplin Chap</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

