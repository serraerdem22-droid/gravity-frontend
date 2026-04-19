# Kaggle Savaşı — Model Yarışı ⚔️

Bu proje, veri bilimine giriş sürecini oyunlaştırmak amacıyla geliştirilmiş rekabetçi bir web oyunudur. İki kişilik yapısıyla Kaggle yarışmalarını simüle eder.

## Proje Hakkında

Oyuncuya kirli bir veri seti verilir. Rakip olarak suni zeka ile yarışılır. Kim veriyi daha iyi temizler, daha doğru özellikler üretir ve daha başarılı bir model kurarsa o kazanır.

## Oyun Aşamaları

Birinci aşamada veri temizleme yapılır. Kirli veri setinde eksik değerler, aykırı gözlemler, hatalı veri tipleri ve tekrarlayan satırlar bulunmaktadır. Oyuncu bu sorunları tespit edip tıklayarak düzeltir. Her doğru düzeltme puan kazandırır.

İkinci aşamada özellik mühendisliği uygulanır. Oyuncu mevcut değişkenlerden yeni ve anlamlı özellikler türetir. STEM ortalaması, harf notu dönüşümü, normalize puanlar ve risk skoru gibi seçenekler arasından tercih yapılır. Her seçim bonus puan sağlar.

Üçüncü aşamada model seçimi gerçekleştirilir. Oyuncu Linear Regression, Random Forest, Neural Network, KNN, SVM ve XGBoost algoritmaları arasından birini seçer ve modelini eğitir. Modelin doğruluk oranı final puanını belirler.

## Puanlama

Veri temizleme her sorun için 10 ile 20 puan arasında puan sağlar. Özellik mühendisliği her seçim için 15 ile 30 puan arasında bonus kazandırır. Model doğruluğu ise yüzde değeri kadar puan olarak eklenir.

## Teknolojiler

Uygulama saf HTML, CSS ve JavaScript ile geliştirilmiştir. Herhangi bir kütüphane veya framework kullanılmamıştır. Tüm oyun mantığı tarayıcı üzerinde çalışır.

## Oyunu Çalıştırmak

index.html dosyasını bir tarayıcıda açmak yeterlidir. Sunucu kurulumuna gerek yoktur.
