import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#007bff',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#007bff',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: 150,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#666',
  },
});

const BookingPDF = ({ bookingDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Booking Confirmation</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Booking ID:</Text>
          <Text style={styles.value}>{bookingDetails?.bookingId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Guest Name:</Text>
          <Text style={styles.value}>{bookingDetails?.fullName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Hotel:</Text>
          <Text style={styles.value}>{bookingDetails?.hotelName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Check-in:</Text>
          <Text style={styles.value}>{bookingDetails?.checkIn}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Check-out:</Text>
          <Text style={styles.value}>{bookingDetails?.checkOut}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total Amount:</Text>
          <Text style={styles.value}>€{bookingDetails?.total}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Thank you for choosing our service</Text>
      </View>
    </Page>
  </Document>
);

export default BookingPDF; 