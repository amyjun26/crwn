import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL } from '../config';
import { LinearGradient } from 'expo-linear-gradient';

export default function OnboardingScreen({ onDone }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hairType, setHairType] = useState('');
  const [location, setLocation] = useState('');

  const submit = async () => {
    if (!name || !email) {
      Alert.alert('Please enter name and email');
      return;
    }

    const payload = { name, dob, email, phone, hairType, location, createdAt: new Date().toISOString() };

    try {
      // Try sending to backend
      const res = await fetch(`${BACKEND_URL}/api/onboard`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Network response not ok: ' + res.status);

      const json = await res.json();
      console.log('onboard ok', json);

      // Persist locally and mark onboarded
      await AsyncStorage.setItem('onboarded', 'true');
      await AsyncStorage.setItem('user_profile', JSON.stringify(payload));
      Alert.alert('Thanks!', 'Onboarding complete.');
      if (onDone) onDone();
    } catch (e) {
      console.error('Onboard submit failed:', e);

      // fallback: save locally and proceed (so user isn't blocked)
      try {
        await AsyncStorage.setItem('onboarded', 'true');
        await AsyncStorage.setItem('user_profile', JSON.stringify(payload));
      } catch (err) {
        console.error('AsyncStorage save failed:', err);
        Alert.alert('Failed to save data locally', String(err));
        return; // stop if cannot save locally
      }

      Alert.alert('Saved locally', 'Could not reach server. Your profile was saved locally and you can retry syncing later.');
      if (onDone) onDone();
    }
  };

  return (
    <LinearGradient colors={["#ff6a88", "#ff9a6a"]} style={{flex:1}} start={[0,0]} end={[1,1]}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Welcome — tell us about you</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Full name" placeholderTextColor="#555" />

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} value={dob} onChangeText={setDob} placeholder="YYYY-MM-DD" placeholderTextColor="#555" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="you@domain.com" keyboardType="email-address" placeholderTextColor="#555" />

        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone number" keyboardType="phone-pad" placeholderTextColor="#555" />

        <Text style={styles.label}>Hair texture / type</Text>
        <TextInput style={styles.input} value={hairType} onChangeText={setHairType} placeholder="e.g. 3B, 4A, Relaxed" placeholderTextColor="#555" />

        <Text style={styles.label}>Location</Text>
        <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="City, Country" placeholderTextColor="#555" />

        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 28,
    paddingTop: 80
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 22,
    textAlign: 'center'
  },
  label: {
    fontSize: 13,
    marginTop: 12,
    marginBottom: 6,
    color: '#fff',
    opacity: 0.95
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 12,
    borderRadius: 10,
    color: '#111'
  },
  button: {
    marginTop: 24,
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ff6a88',
    fontWeight: '700',
    fontSize: 16
  }
});
